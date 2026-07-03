// src/lib/nfcAuth.ts

export interface AuthUser {
  id: number;
  ecosystem_uid: string;
  role: string;
  created_at: string;
}

export interface AuthResponse {
  token: string;
  user: AuthUser;
}

/**
 * Initiates an NFC scan using the Web NFC API.
 * Reads the nfc_chip_id and authenticates via Aporaksha.
 */
export async function scanNFCAndLogin(): Promise<AuthResponse> {
  // @ts-ignore - NDEFReader is not in standard lib dom yet
  if (!('NDEFReader' in window)) {
    throw new Error('NFC is not supported on this device/browser. Please use Chrome on Android.');
  }

  try {
    // @ts-ignore
    const ndef = new NDEFReader();
    await ndef.scan();
    
    return new Promise((resolve, reject) => {
      // Set a timeout in case the user doesn't scan
      const timeout = setTimeout(() => {
        reject(new Error('NFC scan timed out.'));
      }, 30000);

      // @ts-ignore
      ndef.addEventListener("readingerror", () => {
        clearTimeout(timeout);
        reject(new Error('Error reading NFC tag.'));
      }, { once: true });

      // @ts-ignore
      ndef.addEventListener("reading", async ({ serialNumber }) => {
        clearTimeout(timeout);
        
        // The serialNumber is typically a hex string (e.g., "04:22:33:44:55:66:77")
        // We'll normalize it to a clean string if needed.
        const nfcChipId = serialNumber;

        if (!nfcChipId) {
          reject(new Error('No serial number found on the NFC tag.'));
          return;
        }

        try {
          const response = await fetch('https://aporaksha.com/api/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              action: 'nfc_login',
              nfc_chip_id: nfcChipId
            })
          });

          if (!response.ok) {
            const data = await response.json().catch(() => ({}));
            throw new Error(data.error || 'Authentication failed. Is this tag registered to a Passport?');
          }

          const data: AuthResponse = await response.json();
          resolve(data);
        } catch (error: any) {
          reject(error);
        }
      }, { once: true });
    });
  } catch (error: any) {
    throw new Error(`NFC Error: ${error.message}`);
  }
}
