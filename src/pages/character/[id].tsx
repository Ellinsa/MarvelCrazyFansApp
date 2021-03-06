import { GetServerSideProps, GetStaticProps } from "next";
import api from "../../services/api/api";
import { CharacterTemplate } from "../../templates/Character";
import { CharacterType } from "../../types/character";

export type CharacterProps = {
  character: CharacterType;
};
const CharacterPage = ({ character }: CharacterProps) => {
  return (
    <div>
      <CharacterTemplate character={character} />
    </div>
  );
};
export default CharacterPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id;

  const characterId = await api.get(`characters/${id}`);
  const characterComics = await api.get(`characters/${id}/comics`);
  const characterEvents = await api.get(`characters/${id}/events`);
  const characterSeries = await api.get(`characters/${id}/series`);

  const comics = characterComics.data.data.results.map((comic: any) => {
    return {
      id: comic.id,
      title: comic.title,
      thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
    };
  });

  const events = characterEvents.data.data.results.map((event: any) => {
    return {
      id: event.id,
      title: event.title,
      thumbnail: `${event.thumbnail.path}.${event.thumbnail.extension}`,
    };
  });

  const series = characterSeries.data.data.results.map((series: any) => {
    return {
      id: series.id,
      title: series.title,
      thumbnail: `${series.thumbnail.path}.${series.thumbnail.extension}`,
    };
  });

  const regExp = /\(([^)]+)\)/;

  const character = characterId.data.data.results.map((character: any) => {
    const name = regExp.exec(character.name);
    const hero = character.name.substring(0, character.name.indexOf("("));

    return {
      id: character.id,
      hero: hero ? hero : character.name,
      name: name ? name[1] : "",
      description: character.description,
      thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
      comics,
      events,
      series,
    };
  })[0];

  return {
    props: {
      character,
    },
  };
};
