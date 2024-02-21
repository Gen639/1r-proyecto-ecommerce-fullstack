
import { useNavigate } from 'react-router-dom'
import { React, useState } from 'react';
import { ProfileOutlined, AuditOutlined, LoginOutlined, AmazonOutlined , WindowsOutlined,DropboxOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import "../../../App.scss"

const items = [
  {
    label: 'Home',
    key: 'home',
    icon: <WindowsOutlined />,
  },
  {
    label: 'Login',
    key: 'login',
    icon: <LoginOutlined />,
    
  },
  {
    label: 'Register',
    key: 'register',
    icon: <AuditOutlined />,
  },
  {
    label: 'Products',
    key: 'products',
    icon: <AmazonOutlined />,
  },
  {
    label: 'Cart',
    key: 'cart',
    icon: <DropboxOutlined />,
  },
  {
    label: 'Profile',
    key: 'profile',
    icon: <ProfileOutlined />,
  },
]

const Header = () => {
  let navigate = useNavigate()
  const [current, setCurrent] = useState('home')

  const onClick = (e) => {
    setCurrent(e.key)
    switch (e.key){ 
          case 'home': 
            navigate('/')
            break
          case 'login': 
            navigate('/login')
            break
          case 'register': 
            navigate('/register')
            break
          case 'products': 
            navigate('/products')
            break
          case 'profile': 
            navigate('/profile')
            break
		case 'cart': 
            navigate('/cart')
            break
		
    }
  }

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
}

export default Header




// import { useNavigate, Link } from 'react-router-dom';
// import React, { useState, useContext } from 'react';
// import { ProfileOutlined, AuditOutlined, LoginOutlined, AmazonOutlined , WindowsOutlined,DropboxOutlined } from '@ant-design/icons';
// import { Menu } from 'antd';
// import { AuthContext } from './AuthContext'; // Importa el contexto de autenticación

// const items = [
//   {
//     label: 'Home',
//     key: 'home',
//     icon: <WindowsOutlined />,
//   },
//   {
//     label: 'Login',
//     key: 'login',
//     icon: <LoginOutlined />,
//     authRequired: false, // Indica que este elemento no requiere autenticación
//   },
//   {
//     label: 'Register',
//     key: 'register',
//     icon: <AuditOutlined />,
//     authRequired: false, // Indica que este elemento no requiere autenticación
//   },
//   {
//     label: 'Products',
//     key: 'products',
//     icon: <AmazonOutlined />,
//   },
//   {
//     label: 'Cart',
//     key: 'cart',
//     icon: <DropboxOutlined />,
//   },
//   {
//     label: 'Profile',
//     key: 'profile',
//     icon: <ProfileOutlined />,
//     authRequired: true, // Indica que este elemento requiere autenticación
//   },
// ];

// const Header = () => {
//   const navigate = useNavigate();
//   const [current, setCurrent] = useState('home');
//   const { isLoggedIn } = useContext(AuthContext); // Obtén el estado de autenticación del contexto

//   const onClick = (e) => {
//     setCurrent(e.key);
//     const selectedItem = items.find(item => item.key === e.key);
//     if (!selectedItem.authRequired || isLoggedIn) {
//       switch (e.key) { 
//         case 'home': 
//           navigate('/');
//           break;
//         case 'login': 
//           navigate('/login');
//           break;
//         case 'register': 
//           navigate('/register');
//           break;
//         case 'products': 
//           navigate('/products');
//           break;
//         case 'profile': 
//           navigate('/profile');
//           break;
//         case 'cart': 
//           navigate('/cart');
//           break;
//         default:
//           break;
//       }
//     } else {
//       // Redirige a la página de inicio de sesión si el usuario intenta acceder a una página protegida sin estar autenticado
//       navigate('/login');
//     }
//   };

//   return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items.filter(item => !item.authRequired || isLoggedIn)} />
// };

// export default Header;
