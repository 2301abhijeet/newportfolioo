import DropdownMenu from "./DropdownMenu";
import HeaderInfo from "./HeaderInfo";

export default function Navbar() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 pointer-events-none">
          {/* Logo or other left-aligned header elements would go here in the future if needed */}
      </header>
      {/* 
        The DropdownMenu handles its own fixed positioning in the top right. 
        It needs pointer-events-auto so it can be clicked.
      */}
      <div className="pointer-events-auto">
        <HeaderInfo />
        <DropdownMenu />
      </div>
    </>
  );
}
