import { Grid, Slider, Typography } from "@material-ui/core"

interface SliderProps  {
title : string;
inputValue: number;
onChangeFunction: (e: Event, newValue: number | number[]) => void;
width: number;
maxValue:number;


}


export const CustomSlider = ({title, inputValue, onChangeFunction, width, maxValue}:SliderProps) => {
  
return (
    <Grid>
          <Typography>{title}</Typography>
          <Slider
            size="small"
            aria-label="Small"
            value={inputValue}
            onChange={onChangeFunction}
            max={maxValue}
            valueLabelDisplay="auto"
            sx={{width: width}}
          />
        </Grid>

)


}


export default CustomSlider;