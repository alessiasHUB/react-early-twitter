interface NavItemProps {
  label: string;
}

function NavItem(props: NavItemProps): JSX.Element {
  const arrow = "->"
  return (
    <>
      <span> {arrow} </span>
      <a href="#">~{props.label.toUpperCase()}</a>
    </>
  );
}

export default NavItem;