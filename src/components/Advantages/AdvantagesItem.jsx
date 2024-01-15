import { AdvantagesItemContent, AdvantagesItemWrapperS, CircleBox, CircleWrapper, 
  // Container, CornerBox 
} from './AdvantagesItemStyled';

const AdvantagesItem = (variant, content, children) => {
  return (
    <>
    <AdvantagesItemWrapperS className={variant}>
    <AdvantagesItemContent>{content}</AdvantagesItemContent>
    <CircleWrapper>
    <CircleBox>{children}</CircleBox>
    </CircleWrapper>
    
  </AdvantagesItemWrapperS>
  </>
  )
}

export default AdvantagesItem;


//  <AdvantagesItemWrapperStyled>
//       <AdvantagesItemContent>{content}</AdvantagesItemContent>
//       <AdvantagesItemIconWrapper>
//         <AdvantagesIcon>{children}</AdvantagesIcon>
//       </AdvantagesItemIconWrapper>
//     </AdvantagesItemWrapperStyled> 