import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"


export default function Header(){

    return (
      
        <NavigationMenu className="bg-white dark:bg-gray-900 flex justify-between items-center p-4">
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/">
        Inicio
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/about">
        Acerca de
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem >
      <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/game">
        Juego
      </NavigationMenuLink>
    </NavigationMenuItem>

  </NavigationMenuList>
</NavigationMenu>


    );
}