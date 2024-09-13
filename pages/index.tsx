import { MainContainer, ContentWrapper} from "./styles";
import React, { useContext, useState } from "react";
import Link from "next/link";
import {  Grid, Button } from "@material-ui/core";
import { Categories } from "../Data/Categories";
import { Tags } from "../Data/Tags";
import axios from "axios";
import AppContext from "../AppContext";
import CustomSlider from "../components/Slider";
import CustomTextfield from "../components/TextField";
import { Levels } from "../Data/Levels";
import { Header } from "../components/Header";

export const TriviaApp = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [level, setLevel] = useState<string>("");
  const [tag, setTag] = useState<string[]>([]);
  const [numberQuestions, setNumberQuestions] = useState<number>(5);
  const context = useContext(AppContext);

  const getData = async () => {
    if (!selectedCategories || !numberQuestions || !level) return;
    const { data } = await axios.get(
      "https://the-trivia-api.com/api/questions",
      {
        params: {
          categories: `${selectedCategories}`,
          limit: `${numberQuestions}`,
          difficulty: `${level}`,
          //tags: `${ tag}`,
        },
      }
    );

    context.setFetchedQuestions(data);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    setSelectedCategories(typeof value === "string" ? value.split(",") : value);
  };

  const handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setTag(typeof value === "string" ? value.split(",") : value);
  };

  const handleSliderChange = (e: Event, newValue: number | number[]) => {
    setNumberQuestions(newValue as number);
  };
  const handleLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLevel(event.target.value);
  };

  return (
    <MainContainer>
      <Header title="The Ultimate Quiz" />
      <ContentWrapper>
        <CustomTextfield
          inputValue={selectedCategories}
          onChangeFunction={handleCategoryChange}
          textFieldElements={Categories}
          Label=" Select Your Categories"
          isMultiple={true}
        />
        <CustomTextfield
          inputValue={tag}
          onChangeFunction={handleTagChange}
          textFieldElements={Tags}
          Label="Select your Tags"
          isMultiple={true}
        />
        <CustomTextfield
          inputValue={level}
          onChangeFunction={handleLevelChange}
          textFieldElements={Levels}
          Label="Select your Level"
          isMultiple={false}
        />

        <CustomSlider
          title="Select The Number of Questions"
          inputValue={numberQuestions}
          onChangeFunction={handleSliderChange}
          width={300}
          maxValue={70}
        />
        <Grid>
          <Button variant="contained" color="secondary" onClick={getData}>
            <Link
              href={{
                pathname: "Questions",
              }}
            >
              Start
            </Link>
          </Button>
        </Grid>
      </ContentWrapper>
    </MainContainer>
  );
};

export default TriviaApp;
