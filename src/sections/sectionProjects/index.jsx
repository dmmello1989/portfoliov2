import { projectsData } from "./projectsData";
import { ReactPhotoCollage } from "react-photo-collage";
import * as S from "./styles";



export const SectionProjects = () => {
  return (
    <S.Section>
      <S.Container>
        <S.List>
          {projectsData.map((project, index) => {
            const isReverse = index % 2 !== 0;
            const projectsPhoto = project.itemPhotos.map(photo => { 
              return { source: photo } 
            });

            const setting = {
              width: "500px",
              height: ["250px", "100px"],
              layout: [1, 4],
              photos: projectsPhoto,
              showNumOfRemainingPhotos: true
            };

            return (
              <S.Item key={`${project.itemTitle}-${index}`} isReverse={isReverse}>
                <S.HalfSection>
                  <S.ItemTitle>{project.itemTitle}</S.ItemTitle>
                  <S.ItemText>
                    {project.itemText}
                  </S.ItemText>
                  <S.ItemStack>
                    {project.itemStack}
                  </S.ItemStack>
                </S.HalfSection>
                <S.HalfSection>
                  <ReactPhotoCollage {...setting} />
                </S.HalfSection>
              </S.Item>
            )
          })}
        </S.List>
      </S.Container>
    </S.Section>
  )
}