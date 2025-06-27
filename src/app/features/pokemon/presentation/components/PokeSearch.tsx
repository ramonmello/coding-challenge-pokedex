import * as React from "react";

import { SearchIcon, SendIcon } from "@/app/shared/components/icons";
import { Button } from "@/app/shared/components/ui/button";
import { cn } from "@/app/shared/utils";

export function PokeSearch({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <div
      className={cn(
        "flex outline-1 -outline-offset-1 outline-blue-medium rounded-lg h-11 bg-blue-light focus-within:outline-2 focus-within:outline-blue-dark/70",
        className
      )}
    >
      <SearchIcon
        aria-hidden="true"
        className="pointer-events-none shrink-0 ml-2 mr-4 size-6 self-center text-blue-medium"
      />
      <input
        id="search-pokemon"
        name="search-pokemon"
        placeholder="Search Pokémon"
        className="w-full focus:outline-none text-sm text-blue-dark placeholder:text-blue-medium placeholder:text-sm"
        {...props}
      />

      <Button
        variant="text"
        size="icon"
        className="mr-2"
        onClick={() => {
          console.log("clicked");
        }}
      >
        <SendIcon className="text-blue-medium size-5" />
      </Button>
    </div>
  );
}
