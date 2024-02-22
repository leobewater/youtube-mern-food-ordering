import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MenuItem as MenuItemType } from "@/types";

type Props = {
  menuItem: MenuItemType;
};

export const MenuItem = ({ menuItem }: Props) => {
  return (
    <Card className="cursor-pointer">
      <CardHeader>
        <CardTitle className="">{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex">
        ${(menuItem.price / 100).toFixed(2)}
      </CardContent>
    </Card>
  );
};
