import { Menu, MenuItem, } from "electron";

const template = [
  {
    label: 'Test',
    submenu: [
      {
        label: 'submenu1'
      }
    ],
    
  },
  {
    label: 'Test',
    submenu: [
      {
        label: 'submenu1'
      }
    ],
    
  }
]

export const menuExtended: MenuItem[] = [
    new MenuItem({
        label: "Cloud",
        submenu: [
            {
              label: 'Sync'
            },
            {
            label: 'Sync'
            },
            {
            label: 'Sync'
            },
            {
            label: 'Sync'
            },
          ],
    }),
    new MenuItem({
        label: 'Test',
        submenu: [
          {
            label: 'submenu1'
          }
        ],
    })
]


