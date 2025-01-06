import Button from "./ui/Button";

export default function Main(props) {
  const {tech, btn} = props;
  
  return (
    <main>
        <h1>Halo, saya sedang belajar {tech}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, </p>
        <Button txt={btn}/>
    </main>
  );
}


