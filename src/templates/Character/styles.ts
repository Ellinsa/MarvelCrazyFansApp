import styled from "styled-components"
//TODO - change styles
export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 1rem;
`

export const Content = styled.section`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 2rem;
  padding:10px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Infos = styled.aside`
  display: flex;
  flex-direction: column;
  color:white;
  text-align:center;
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1rem;
    filter: opacity(0.5);
  }

  .description {
    margin-top: 1rem;
    filter: opacity(0.8);
    text-align: justify;
  }

  img {
    border-radius: 5px;
    object-fit: cover;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
    object-position: top center;
    background: #121214;
    background-image: linear-gradient(
      to right,
      #121214 0%,
      #171719 40%,
      #121214 20%,
      #121214 100%
    );
    object-fit: cover;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
    object-position: top center;

    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;
    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }
`

export const List = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color:white;
  header {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    position: relative;

    h2 {
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &.active {
        filter: brightness(0.8);

        color: var(--primary);
      }

      &:hover {
        filter: brightness(1);
      }
    }
  }
`

export const Cards = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  h3 {
    font-size: 1rem;
    white-space: nowrap;
    width: 20ch;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  img {
    border-radius: 5px;
    background: #121214;
    background-image: linear-gradient(
      to right,
      #121214 0%,
      #171719 40%,
      #121214 20%,
      #121214 100%
    );
    object-fit: cover;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
    object-position: top center;

    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;
    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }
`
