import React, { useEffect, useState } from "react";
import { GenericCharacter } from "../../types/types";
import { fetchCharacter } from "../../services/character";
import { Link, useParams } from "react-router-dom";
import { Card, Space, Tag, Typography, Image, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;

const Character: React.FC = () => {
  const [character, setCharacter] = useState<GenericCharacter | null>(null);
  const { id } = useParams<{ id: string }>();

  const getCharacters = async () => {
    if (id) {
      const characterData: GenericCharacter[] = await fetchCharacter(id);
      const foundCharacter = characterData.find(
        (character) => character.id === id
      );
      setCharacter(foundCharacter || null);
    }
  };

  useEffect(() => {
    if (id) {
      getCharacters();
    }
  }, [id]);

  if (!character) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <Card hoverable style={{ maxWidth: 700, width: "100%", margin: "auto" }}>
        <Image
          style={{
            borderRadius: "100%",
            height: 100,
            width: 100,
            objectFit: "cover",
          }}
          alt={character.name}
          src={character.image}
        />
        <Title level={2}>{character.name}</Title>
        <Space direction="vertical" style={{ marginTop: 16 }}>
          <Title level={4}>Details</Title>
          <Tag color="geekblue">Actor: {character.actor}</Tag>
          <Tag color="geekblue">House: {character.house}</Tag>
          <Tag color="orange">Species: {character.species}</Tag>
          <Tag color="cyan">Gender: {character.gender}</Tag>
          <Tag color="green">Year of Birth: {character.yearOfBirth}</Tag>
          <Tag color={character.alive ? "green" : "red"}>
            {character.alive ? "Alive" : "Deceased"}
          </Tag>
        </Space>
        <Space direction="vertical" style={{ marginTop: 16, marginLeft: 50 }}>
          <Title level={4}>Wand</Title>
          <Tag color="purple">Wood: {character.wand?.wood}</Tag>
          <Tag color="blue">Core: {character.wand?.core}</Tag>
          <Tag color="green">Length: {character.wand?.length} inches</Tag>
        </Space>
      </Card>
      <Link to={"/"}>
        <Button
          type="primary"
          icon={<ArrowLeftOutlined />}
        >Back</Button>
      </Link>
    </>
  );
};

export default Character;
