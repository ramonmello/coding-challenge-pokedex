import { useSuspenseQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { pokemonsPageQueryOptions } from "@/app/features/pokemon/queries";
import { useTranslation } from "@/app/shared/hooks/useTranslation";
import { SUPPORTED_LANGUAGES } from "@/main/config/i18n/config";

export const PokemonList = () => {
  const { data } = useSuspenseQuery(pokemonsPageQueryOptions());
  const { t, i18n } = useTranslation("common");
  const handleShowToast = () => {
    toast.success("Lista de Pokémons carregada com sucesso!", {
      description: `Encontrados ${data?.results?.length || 0} pokémons`,
    });
  };

  return (
    <div>
      <h1>PokemonList</h1>
      <h2>{t("hello")}</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Idiomas disponíveis:</h3>
        <div className="flex gap-2">
          {SUPPORTED_LANGUAGES.map((lang) => (
            <button
              key={lang}
              onClick={() => i18n.changeLanguage(lang)}
              disabled={i18n.resolvedLanguage === lang}
              className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
            >
              {lang}
            </button>
          ))}
        </div>
      </div>
      <h2>Test Lang: {t("hello")}</h2>
      <button
        onClick={handleShowToast}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Mostrar Toast
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
