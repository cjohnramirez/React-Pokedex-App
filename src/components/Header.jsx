export default function Header(props) {
  const { handleToggleMenu, showSideMenu } = props
  return (
    <header style={showSideMenu ? {} : {display: "none"}}>
      <button onClick={handleToggleMenu} className="open-nav-button">
        <i className="fa-solid fa-bars"></i>
      </button>
      <h1 className="text-gradient">Pokédex</h1>
    </header>
  )
}