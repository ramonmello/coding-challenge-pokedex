import type { PokemonCardData } from "../screens/tmp_fake_data";
import {
  Button,
  Badge,
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/app/shared/components/ui";
import { useTranslation } from "@/app/shared/hooks/useTranslation";
import { PokeCardStat } from "./PokeCardStat";
import { ChevronDownIcon } from "@/app/shared/components/icons";
import { ResponsiveDialog } from "@/app/shared/components";
import { PokeDetails } from "./PokeDetails";

export const PokeCard = ({ name, image, types, stats }: PokemonCardData) => {
  const { t } = useTranslation("card");

  return (
    <Collapsible asChild>
      <div className="group rounded-2xl bg-blue-light px-4 pt-4 pb-2 shadow-[1px_1px_2px_0_rgba(0,0,0,0.1),_-1px_-1px_2px_0_rgba(0,0,0,0.05)]">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h2 className="font-bold text-lg">{name}</h2>
            <div className="flex gap-2 my-1">
              {types.map((type) => (
                <Badge variant="default" key={type}>
                  {type}
                </Badge>
              ))}
            </div>

            <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
              <PokeCardStat name={t("stats.hp")} value={stats.hp} />
              <PokeCardStat name={t("stats.attack")} value={stats.attack} />
              <PokeCardStat name={t("stats.defense")} value={stats.defense} />
              <PokeCardStat
                name={t("stats.specialAttack")}
                value={stats.special_attack}
              />
              <PokeCardStat
                name={t("stats.specialDefense")}
                value={stats.special_defense}
              />
              <PokeCardStat name={t("stats.speed")} value={stats.speed} />
            </CollapsibleContent>
            <PokeCardStat name={t("stats.total")} value={stats.total} />
          </div>
          <img
            src={image}
            alt={name}
            className="h-20 w-auto transition-[height] duration-300 group-data-[state=open]:h-[7.5rem]"
          />
        </div>
        <div className="mt-2 flex justify-between">
          <CollapsibleTrigger asChild>
            <Button variant="text" className="flex-1/2">
              <span className="group-data-[state=open]:hidden">
                {t("expand")}
              </span>
              <span className="hidden group-data-[state=open]:inline">
                {t("collapse")}
              </span>
              <ChevronDownIcon className="size-5 transition-transform duration-300 group-data-[state=open]:-rotate-180" />
            </Button>
          </CollapsibleTrigger>
          <ResponsiveDialog
            trigger={
              <Button variant="text" className="flex-1/2">
                {t("viewDetails")}
              </Button>
            }
            title={t("viewDetails")}
            description={t("viewDetails")}
          >
            <PokeDetails />
          </ResponsiveDialog>
        </div>
      </div>
    </Collapsible>
  );
};
