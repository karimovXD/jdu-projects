"use client";

import * as React from "react";
import { Label } from "@/components/ui/label";
import { SidebarGroup, SidebarGroupContent } from "@/components/ui/sidebar";
import { SearchIcon, Loader2 } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

interface SearchFormProps extends React.ComponentProps<"form"> {
  onSearch: (query: string) => void;
  debounceMs?: number;
}

export function SearchForm({
  onSearch,
  debounceMs = 2000,
  ...props
}: SearchFormProps) {
  const [value, setValue] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (newValue.trim() === "") {
      setIsSearching(false);
      onSearch("");
      return;
    }

    setIsSearching(true);

    timerRef.current = setTimeout(() => {
      onSearch(newValue.trim());
      setIsSearching(false);
    }, debounceMs);
  };

  React.useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <form onSubmit={(e) => e.preventDefault()} {...props} className="flex-1">
      <SidebarGroup className="flex-1">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <InputGroup>
            <InputGroupInput
              id="search"
              value={value}
              onChange={handleChange}
              placeholder="Search the tasks..."
            />
            <InputGroupAddon align="inline-start">
              {isSearching ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <SearchIcon className="size-4" />
              )}
            </InputGroupAddon>
          </InputGroup>
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
}
