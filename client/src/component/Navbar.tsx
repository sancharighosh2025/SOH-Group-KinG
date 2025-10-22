import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Star, ShoppingCart, User, LogOut, UserCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";

const routeToLogo: Record<string, string> = {
  "/": "/Logo/Logo-SOH.png", // temporary placeholder; replace with provided assets later
  "/orchid-gallery": "/Logo/Logo-Orchid.png",
  "/ar-chitrakola": "/Logo/Logo-AR2.png",
  "/ghoti-na-bangal": "/Logo/Logo-Ghoti.png",
  "/made-my-day": "/Logo/Logo-Made.png",
  "/about": "/Logo/Logo-SOH.png",
};

const routeToTitle: Record<string, string> = {
  "/": "SOH Group",
  "/ar-chitrakola": "AR chitrakola",
  "/orchid-gallery": "Orchid Gallery",
  "/ghoti-na-bangal": "Ghoti na Bangal",
  "/made-my-day": "Made My Moments",
  "/about": "About Us",
};

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = useCart();
  const { state: authState, logout } = useAuth();
  const [open, setOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = React.useState(false);

  React.useEffect(() => {
    // close dropdown on route change
    setOpen(false);
    setShowProfileDropdown(false);
  }, [location.pathname]);

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (showProfileDropdown && !target.closest('[data-profile-dropdown]')) {
        setShowProfileDropdown(false);
      }
    };

    if (showProfileDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showProfileDropdown]);

  const currentLogo = routeToLogo[location.pathname] ?? routeToLogo["/"];
  const currentTitle = routeToTitle[location.pathname] ?? routeToTitle["/"];
  
  // Check if current route is Made My Day related
  const isMadeMyDayRoute = location.pathname.startsWith('/made-my-day') || 
                          location.pathname.startsWith('/category/') || 
                          location.pathname === '/cart';

  const linkBase = "px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg";
  const getLinkClass = ({ isActive }: { isActive: boolean }) => {
    const baseClasses = linkBase;
    const activeClasses = isActive 
      ? "text-amber-600 bg-amber-50" 
      : "text-slate-700 hover:text-slate-900 hover:bg-slate-100";
    return `${baseClasses} ${activeClasses}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`relative transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50 mt-2 rounded-2xl"
              : "bg-white/95 backdrop-blur-md mt-4 rounded-2xl"
          }`}
        >
          <nav className="flex items-center justify-between px-6 py-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img src={currentLogo} alt="Route Logo" className="h-12 w-12 transition-transform duration-300 group-hover:scale-105" />
                {isScrolled && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full flex items-center justify-center">
                    <Star className="w-2.5 h-2.5 text-white fill-white" />
                  </div>
                )}
              </div>
              <span className="font-heading font-bold text-lg text-slate-900 transition-all duration-300">
                {currentTitle}
              </span>
            </Link>

            <div className="flex items-center gap-8">
              <div className="hidden lg:flex items-center gap-8">
                <NavLink to="/" end className={getLinkClass}>
                  Home
                </NavLink>
                <NavLink to="/ar-chitrakola" className={getLinkClass}>
                  AR Chitrakola
                </NavLink>
                <NavLink to="/orchid-gallery" className={getLinkClass}>
                  Orchid Gallery
                </NavLink>
                <NavLink to="/ghoti-na-bangal" className={getLinkClass}>
                  Ghoti na Bangal
                </NavLink>
                <NavLink to="/made-my-day" className={getLinkClass}>
                  Made My Moments
                </NavLink>
                <NavLink to="/about" className={getLinkClass}>
                  About
                </NavLink>
              </div>

              <div className="hidden lg:flex items-center gap-4">
                {isMadeMyDayRoute && (
                  <Link to="/cart" className="relative">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 font-semibold transition-all duration-300"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Cart
                      {state.totalItems > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {state.totalItems}
                        </span>
                      )}
                    </Button>
                  </Link>
                )}
                
                {authState.isAuthenticated ? (
                  <div className="relative" data-profile-dropdown>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                      className="border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 font-semibold transition-all duration-300"
                    >
                      <UserCircle className="w-4 h-4 mr-2" />
                      {authState.user?.name || 'Profile'}
                    </Button>
                    
                    {showProfileDropdown && (
                      <div className="absolute right-0 top-full mt-2 w-48 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-slate-200/50 py-2 z-50">
                        <div className="px-4 py-2 border-b border-slate-200/50">
                          <p className="text-sm font-medium text-slate-900">{authState.user?.name}</p>
                          <p className="text-xs text-slate-500">{authState.user?.email}</p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            console.log('Logout clicked'); // Debug log
                            logout();
                            setShowProfileDropdown(false);
                            navigate('/');
                          }}
                          className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-100 transition-colors duration-300 flex items-center"
                        >
                          <LogOut className="w-4 h-4 mr-2" />
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link to="/login">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 font-semibold transition-all duration-300"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Login
                    </Button>
                  </Link>
                )}
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all duration-300"
                onClick={() => setOpen(!open)}
                aria-label="Open menu"
              >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </nav>

          {open && (
            <div className="lg:hidden border-t border-slate-200/50 bg-white/95 backdrop-blur-md">
              <div className="px-6 py-4 space-y-2">
                <NavLink to="/" end className={getLinkClass}>
                  Home
                </NavLink>
                <NavLink to="/ar-chitrakola" className={getLinkClass}>
                  AR Chitrakola
                </NavLink>
                <NavLink to="/orchid-gallery" className={getLinkClass}>
                  Orchid Gallery
                </NavLink>
                <NavLink to="/ghoti-na-bangal" className={getLinkClass}>
                  Ghoti na Bangal
                </NavLink>
                <NavLink to="/made-my-day" className={getLinkClass}>
                  Made My Moments
                </NavLink>
                <NavLink to="/about" className={getLinkClass}>
                  About
                </NavLink>
                <div className="pt-4 space-y-3">
                  {isMadeMyDayRoute && (
                    <Link to="/cart" className="relative block">
                      <Button size="sm" variant="outline" className="w-full border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 font-semibold">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Cart
                        {state.totalItems > 0 && (
                          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {state.totalItems}
                          </span>
                        )}
                      </Button>
                    </Link>
                  )}
                  
                  {authState.isAuthenticated ? (
                    <div className="space-y-2">
                      <div className="px-4 py-2 bg-slate-50 rounded-lg">
                        <p className="text-sm font-medium text-slate-900">{authState.user?.name}</p>
                        <p className="text-xs text-slate-500">{authState.user?.email}</p>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          console.log('Mobile logout clicked'); // Debug log
                          logout();
                          setOpen(false);
                          navigate('/');
                        }}
                        className="w-full border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 font-semibold"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Logout
                      </Button>
                    </div>
                  ) : (
                    <Link to="/login" className="block">
                      <Button size="sm" variant="outline" className="w-full border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 font-semibold">
                        <User className="w-4 h-4 mr-2" />
                        Login
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}


