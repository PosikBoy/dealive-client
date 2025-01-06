module.exports = {
  siteUrl: "https://dealive.ru",
  exclude: ["/login", "/profile"],
  transform: async (config, path) => {
    if (path === "/") {
      return {
        loc: path,
        priority: 1.0, // Главная страница с самым высоким приоритетом
        changefreq: "daily",
      };
    }

    if (path === "/order") {
      return {
        loc: path,
        priority: 0.9, // Низкий приоритет для страницы с политикой
        changefreq: "weekly",
      };
    }

    return {
      loc: path,
      priority: 0.7, // Стандартный приоритет для остальных страниц
      changefreq: "weekly",
    };
  },
};
