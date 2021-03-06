import React from 'react';
import styled from 'styled-components';

import db from '../db.json';
import Widget from '../components/Widget';
import Footer from '../components/Footer';
import GithubCorner from '../components/GithubCorner';
import QuizBackground from '../components/QuizBackground';
import QuizLogo from '../components/QuizLogo';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>The legend of Zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit>
              <input type="name" placeholder="Diz aí seu nome" />
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>The legend of Zelda</h1>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GithubCorner projectUrl="http://github.com/cintiafumi" />
    </QuizBackground>
  );
}
