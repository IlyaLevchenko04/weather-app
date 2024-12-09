import { Container } from '@shared/ui/container';
import { Section } from '@shared/ui/section';
import { useParams } from 'react-router';

export const CityPage = () => {
  const { slug } = useParams();
  return (
    <>
      <Section>
        <Container>{slug}</Container>
      </Section>
      <Section>
        <Container>Section 2</Container>
      </Section>
      <Section>
        <Container>Section 3</Container>
      </Section>
      <Section>
        <Container>Section 4</Container>
      </Section>
      <Section>
        <Container>Section 5</Container>
      </Section>
    </>
  );
};
