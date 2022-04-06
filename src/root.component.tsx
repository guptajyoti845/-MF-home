import './side-bar.css'

export default function Root(props) {
  // return <section>{props.name} is mounted!</section>;
  return(
    <div className='sidenav'>
      <a href="/employees">Employees</a>
      <a href="/">Admin</a>
      <a href="/">Clients</a>
      <a href="/">Contact</a>
</div>
  )
}
