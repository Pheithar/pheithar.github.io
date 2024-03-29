import {FC, memo} from 'react';

import {education, experience, publications, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';
import TimeLineItemWithLink from './TimeLineItemWithLink';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="publications">
          {publications.map(item => (
            <TimeLineItemWithLink item={item} key={`${item.title}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Education">
          {education.map(item => (
            <TimelineItem item={item} key={`${item.title}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Work">
          {experience.map(item => (
            <TimelineItem item={item} key={`${item.title}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Skills">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map(skillgroup => (
              <SkillGroup key={`${skillgroup.name}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
