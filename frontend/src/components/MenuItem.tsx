import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MenuItem as MenuItemType } from "@/types";

type Props = {
  menuItem: MenuItemType;
  addToCart: () => void;
};

export const MenuItem = ({ menuItem, addToCart }: Props) => {
  return (
    <Card className="cursor-pointer" onClick={addToCart}>
      <CardHeader>
        <CardTitle className="">{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold">
        ${(menuItem.price / 100).toFixed(2)}
      </CardContent>
    </Card>
  );
};
