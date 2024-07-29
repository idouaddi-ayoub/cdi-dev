import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='w-screen h-screen'>
      {/* Nav goes here */}
      <header>
        <h1>My App</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      {/* Footer goes here */}
    </div>
  );
}

export default Layout;