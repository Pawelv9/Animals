import React, { Fragment, useMemo } from 'react'

const App = () => {
  const menuArrayFromBackend = [
    {
      title: 'ex1',
      alias: null,  
    },
    {      
      title: 'ex2',
      alias: null,},
    {
      title: 'ex3',
      alias: null,
    },
  ]

  const menuArray: Array<IMenu> = useMemo(() => {
    const middleLength = Math.floor(menuArrayFromBackend.length / 2)
    const res = menuArrayFromBackend.map((item, index) => {
      return { id: index, title: item.title, type: 'string'}
      res.splice(middleLength, 0, {
        id: menuArrayFromBackend.length
        type: 'logo'
        title: ' '
        content:
        'https://image.com'
      });
      return res;
    }, [menuArrayFromBackend])


  return (
    <div className='App'>
      <ul>
        {menuArray.map((menu: IMenu) => (
          <Fragment key={menu.id}>
            {menu.type === 'logo' ? (
              <img src={menu.content} />
            ): (
              <li>{menu.title}</li>
            ) 
            }
          </Fragment>
        ))}
      </ul>
      </div>
  )
}

export default App