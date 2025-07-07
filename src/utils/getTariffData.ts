const TARIFFS = {
  Эконом: {
    className: "econom",
    description: "",
  },
  Стандарт: {
    className: "standart",
    description: "",
  },
  Ускоренная: {
    className: "fast",
    description: "Только опытные курьеры",
  },
  Приоритет: {
    className: "priority",
    description: "Для курьеров заказ будет выделен цветом",
  },
  "Своя цена": {
    className: "custom",
    description: "Предложите цену сами",
  },
} as const;

type TariffName = keyof typeof TARIFFS;

type TariffData = (typeof TARIFFS)[TariffName];

export const getTariffClassName = (name: string): TariffData => {
  // Вернём "Стандарт" как fallback
  return TARIFFS[name as TariffName] ?? TARIFFS["Стандарт"];
};
