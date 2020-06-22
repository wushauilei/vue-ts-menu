import CryptoJs from 'crypto-js';

class Encryption {
    private CryptoJs = CryptoJs;

    // 加密 MD5
    public encryptionMd5(word: string): string {
        const result = this.CryptoJs.MD5(word).toString();
        return result;
    }
}

export default Encryption;
