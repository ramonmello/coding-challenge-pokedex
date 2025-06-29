import useTranslation from "@/app/shared/hooks/useTranslation";
import { PokeTypes } from "./PokeTypes";
import { Tabs } from "./PokeTabs";

export type PokeDetailsData = {
  name: string;
  image: string;
  types: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
    total: number;
  };
};

export const PokeDetails = ({ name, types, stats, image }: PokeDetailsData) => {
  const { t } = useTranslation(["common", "modal"]);
  const Status = () => (
    <dl>
      {Object.entries(stats).map(([key, value]) => (
        <div
          key={key}
          className="flex flex-row justify-between border-b border-blue-medium mt-1 first:mt-0"
        >
          <dt className="text-sm font-bold">{t(`stats.${key}`)}</dt>
          <dd className="text-sm text-blue-medium">{value}</dd>
        </div>
      ))}
    </dl>
  );

  const Details = () => (
    <dl className="space-y-1 text-sm">
      <div className="flex">
        <dt className="font-medium mr-2 text-gray-700">
          {t("modal:abilities")}
        </dt>
        <dd className="text-blue-medium">Overgrow, Chlorophyll</dd>
      </div>

      <div className="flex flex-row gap-4">
        <div className="flex flex-1">
          <dt className="font-medium mr-2 text-gray-700">
            {t("modal:height")}
          </dt>
          <dd className="text-blue-medium">7</dd>
        </div>
        <div className="flex flex-1">
          <dt className="font-medium mr-2 text-gray-700">
            {t("modal:weight")}
          </dt>
          <dd className="text-blue-medium">69</dd>
        </div>
      </div>
    </dl>
  );
  return (
    <div className="h-full">
      <PokeTypes types={types} />
      <img src={image} alt={name} className="h-52 mx-auto w-auto mt-4 mb-6" />

      <Tabs statusContent={<Status />} detailsContent={<Details />} />
    </div>
  );
};
