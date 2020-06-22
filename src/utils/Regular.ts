class Regular {
    /**
     * @name isUsernameLegitimate 帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)
     * @param username 用户名
     * @returns boolean
     */
    public isUsernameLegitimate(username: string): boolean {
        const reg = new RegExp(/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/);
        return reg.test(username);
    }

    /**
     * @name isPasswordLegitimate 密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在 8-10 之间)
     * @param password 密码
     * @returns boolean
     */
    public isPasswordLegitimate(password: string): boolean {
        const reg = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,10}$/);
        return reg.test(password);
    }
}

export default Regular;
