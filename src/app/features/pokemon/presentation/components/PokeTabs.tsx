import { Button } from "@/app/shared/components/ui";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { cn } from "@/app/shared/utils/cn";

const tabs = [
  { key: "status", label: "modal:status" },
  { key: "details", label: "modal:details" },
];

export function Tabs({
  statusContent,
  detailsContent,
}: {
  statusContent: React.ReactNode;
  detailsContent: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState<"status" | "details">("status");
  const { t } = useTranslation(["modal"]);
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex gap-4">
        {tabs.map((tab) => (
          <Button
            key={tab.key}
            variant={activeTab === tab.key ? "filled" : "text"}
            onClick={() => setActiveTab(tab.key as any)}
            className="flex-1"
          >
            {t(tab.label)}
          </Button>
        ))}
      </div>

      <div>
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 pt-4",
            activeTab === "status" ? "h-[11.625rem]" : "h-[3.75rem]"
          )}
        >
          {activeTab === "status" ? statusContent : detailsContent}
        </div>
      </div>
    </div>
  );
}
