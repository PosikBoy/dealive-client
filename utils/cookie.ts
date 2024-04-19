class Cookies {
  setCookie(name: string, value: string, daysToExpire: number = 16): void {
    const date = new Date();
    date.setTime(date.getTime() + daysToExpire * 60 * 60 * 24);
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }
  deleteCookie(name: string): void {
    this.setCookie(name, "", 0);
  }
  getCookie(name: string): string | null {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();

      if (cookie.startsWith(`${name}=`)) {
        return decodeURIComponent(cookie.substring(name.length + 1));
      }
    }

    return null;
  }
}

export default new Cookies();
