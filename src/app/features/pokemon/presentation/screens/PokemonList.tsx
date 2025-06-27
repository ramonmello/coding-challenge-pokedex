import { Input } from "@/app/shared/components/ui";
import { LanguageSwitcher } from "@/app/shared/components";
import { PokeCard } from "../components/PokeCard";
import { fakePokemonList } from "./tmp_fake_data";

export const PokemonList = () => {
  return (
    <main className="font-roboto text-blue-dark">
      <header className="sticky top-0 bg-white flex flex-col pt-4 px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between md:justify-start md:gap-4">
          <h1 className="h-11 leading-11 text-2xl font-bold">Pokédex</h1>
          <div className="h-11 md:hidden flex gap-2">
            <LanguageSwitcher />
          </div>
        </div>
        <Input
          placeholder="Pesquisar"
          className="w-full md:w-auto md:order-none h-11 mt-4 md:mt-0"
        />
        <div className="hidden h-11 md:block">
          <LanguageSwitcher />
        </div>
      </header>
      <section className="px-6 pt-4 flex gap-4 flex-col">
        {fakePokemonList.map((pokemon) => (
          <PokeCard key={pokemon.id} {...pokemon} />
        ))}
      </section>
    </main>
  );
};
