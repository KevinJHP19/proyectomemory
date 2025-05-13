import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
  } from "@/components/ui/navigation-menu"


  export default function Header() {
    return (
      <div className=" dark:bg-gray-900 flex justify-center items-center p-4 w-full">
      <NavigationMenu className="flex justify-center items-center">
          <NavigationMenuList className="gap-40">
            <NavigationMenuItem >
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/">
                Inicio
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/about">
                Acerca de
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/game">
                Juego
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    );
  }