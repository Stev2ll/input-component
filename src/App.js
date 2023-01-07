import './App.css';
import Navegador from './componentes/Nav'
import Input from './componentes/Input'
import Input2 from './componentes/Input2'
import Input3 from './componentes/Input3'
import Input4 from './componentes/Input4'
import Input5 from './componentes/Input5'


function App() {
  return (
    <div className="App">
      <nav>
        <Navegador
          li1="Typography"
          li2="Grid"
          li3="Buttons"
          li4="Inputs"
        />
      </nav>
      <main className='container-main'>
          <h1 className='Title'>Inputs</h1>
          <div className='row'>
             <Input clas = "Normal"
                text="&lt;Input /&gt;"
                label = "Label"
                inputValue="text"
                place="Placeholder"
             />
             <Input clas = "Hover"
                text="&:hover"
                style = "#828282"
                label = "Label" labelcolor = "Color"
                inputValue="text"
                place="Placeholder"
             />
             <Input clas = "Tres"
                text="&:focus"
                style="#828282"
                label="Label" labelcolor = "Color2"
                inputValue="text"
                place="Placeholder"
             />
          </div>
          <div className='row'>
             <Input clas = "Cuatro"
                text="&lt;Input /&gt;"
                label = "Label" labelcolor = "Color3"
                inputValue="text"
                place="Placeholder"
             />
             <Input  clas = "Hover"
                text="&:hover"
                style = "#828282"
                label = "Label"  labelcolor = "Color"
                inputValue="text"
                place="Placeholder"
             />
             <Input  clas = "Cuatro"
                text="&:focus"
                style="#828282"
                label="Label"    labelcolor = "Color3"
                inputValue="text"
                place="Placeholder"
             />
          </div>
          <div className='row'>
             <Input  clas = "Disabled"
                text="&lt;Input disabled /&gt;"
                label = "Label"
                inputValue="text"
                place="Placeholder"
             />
          </div>
          <div className='row'>
             <Input2 
                typeaside = "Row2"
                clas = "Cuatro"
                text="&lt;Input helperText=”Some interesting text” /&gt;"
                label = "Label" labelcolor = "Color"
                label2 = "Some interesting text" 
                inputValue="text"
                place="Placeholder"
             />
             <Input2 clas = "Hover"
                text="&lt;Input helperText=”Some interesting text” error/&gt;"
                style = "#828282"
                label = "Label"  labelcolor = "Color3"
                label2 = "Some interesting text" 
                inputValue="text"
                place="Placeholder"
             />
          </div>
          <div className='row'>
             <Input3 
                clas = "Icons"
                text="&lt;Input startIcon /&gt;"
                label = "Label" labelcolor = "Color"
                inputValue="text"
                place="Placeholder"
             />
             <Input4 clas = "Icons"
                text="&lt;Input endIcon /&gt;"
                style = "#828282"
                label = "Label"  labelcolor = "Color3"
                inputValue="text"
                place="Placeholder"
             />
          </div>
          <div className='row'>
             <Input  clas = "Hover"
                text="&lt;Input value=”text” /&gt;"
                label = "Label"
                inputValue="text"
                value = "Text"
                place="Placeholder"
             />
          </div>
          <div className='row'>
             <Input5 
                clas = "Tamaño"
                text="&lt;IInput size=”sm”&gt;"
                label = "Label" labelcolor = "Color"
                inputValue="text"
                place="Placeholder"
             />
             <Input5 clas = "Tamaño2"
                text="&lt;Input size=”md”/&gt;"
                style = "#828282"
                label = "Label"  labelcolor = "Color3"
                inputValue="text"
                place="Placeholder"
             />
          </div>
          <div className='row'>
             <Input  clas = "InputfullWidth "
                text="&lt;Input fullWidth/&gt;"
                label = "Label"
                inputValue="text"
                value = "Text"
                place="Placeholder"
             />
          </div>
          <div className='row'>
             <Input5  
               clas="Tamaño2"
                text="&lt;Input multiline row=”4”/&gt;"
                label = "Label"
                row="4"
                inputValue="text"
                place="Placeholder"
             />
          </div>
      <footer className='Pie'>
         <h3>created by Stev2ll-devChallenges.io</h3>s
      </footer>
      </main>
      
   </div>
  );
}

export default App;


