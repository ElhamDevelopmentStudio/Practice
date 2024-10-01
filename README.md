# Menu Item Usage

```js
 {menuList.map((menuItem, index) => (
            <li className={cn("w-full")} key={index}>
              {!menuItem.submenus || menuItem.submenus.length === 0 ? (
                <MenuItem // Use the new MenuItem component
                  icon={menuItem.icon}
                  label={menuItem.label}
                  href={menuItem.href}
                  active={menuItem.active}
                  isOpen={isOpen}
                />
              ) : (
                <div className="w-full">
                  <CollapseMenuButton
                    icon={menuItem.icon}
                    label={menuItem.label}
                    active={menuItem.active}
                    submenus={menuItem.submenus}
                    isOpen={isOpen}
                  />
                </div>
              )}
            </li>
          ))}
```