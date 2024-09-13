import { TextField, Grid, MenuItem } from "@material-ui/core"

interface TextFieldProps {
  
inputValue: string [] | string,
onChangeFunction:(event: React.ChangeEvent<HTMLInputElement>) => void,
textFieldElements :string[];
Label:string,
isMultiple: boolean,

}

const CustomTextfield = ({inputValue, onChangeFunction, textFieldElements, Label, isMultiple}:TextFieldProps) => {

return (


    <Grid>
    <TextField
      SelectProps={{
        multiple: isMultiple,
        value: inputValue,
      }}
      select
      label= {Label}
      variant="outlined"
      style={{ marginBottom: 25 }}
      sx={{
        width: 300,
      }}
      onChange={onChangeFunction}
    >
     
 {textFieldElements.map((element) => {
    return (
      <MenuItem key={element} value={element}>
        {element}
      </MenuItem>
    );
  })
}
    </TextField>
  </Grid>


)
    }



export default CustomTextfield