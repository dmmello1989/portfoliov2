import { projectsData } from "./projectsData";
import { ReactPhotoCollage } from "react-photo-collage";
import * as S from "./styles";

export const SectionProjects = () => {
  return (
    <S.Section id="section-projects">
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
              <S.Item data-aos="fade-up" key={`${project.itemTitle}-${index}`} isReverse={isReverse}>
                <S.HalfSection>
                  <S.ItemTitle 
                    data-aos={isReverse ? "fade-right" : "fade-left"}
                  >
                    {project.itemTitle}
                  </S.ItemTitle>
                  <S.ItemText
                    data-aos-delay="150"
                    data-aos={isReverse ? "fade-right" : "fade-left"}
                  >
                    {project.itemText}
                  </S.ItemText>
                  <S.ItemStack
                    data-aos-delay="300"
                    data-aos={isReverse ? "fade-right" : "fade-left"}
                  >
                    {project.itemStack}
                  </S.ItemStack>
                  <S.Link href={project.href} target="_blank">Go to Github repo</S.Link>
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