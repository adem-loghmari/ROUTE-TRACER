import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img
import imgDetail from './assets/p6.jpg';
import imgDetail2 from './assets/p5.jpg';


const SecondSection = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
        color:'black'
    })

    return (
            
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
        sx={{
            py: 10,
            px: 2,
            backgroundColor: '#f6efe9', 
             
        }}
        >
            <CustomGridItem item xs={12} sm={8} md={6} 
            component = 'section'
           
            >
                <Box component='article'
                sx={{
                    px: 4,
                    color:'black'
                }}
                >
                    <Title
                    text={
                        'Expert-Picked Paths'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    Deciding where to begin with courses or videos can be overwhelming and demotivating. At ROUTE TRACER, we eliminate that confusion, providing you with the absolute best starting point. Let us guide you seamlessly, so you can focus on learning without the stress of decision-making.

                    </CustomTypography> 
                </Box>

            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}
            sx={{
                marginLeft:-5
            }}
            >
                <img src={imgDetail} alt="" 
                style={{
                    width: '120%',
                    
                }}
                />
            </Grid>

            <Grid item xs={12} sm={4} md={6}
            sx={{
                order: {xs: 4, sm: 4, md: 3}
            }}
            >
                <img src={imgDetail2} alt="" 
                style={{ 
                    width: "100%",
                }}
                />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
            sx={{
                order: {xs: 3, sm: 3, md: 4}
            }}
            >
                <Box component='article'
                sx={{
                    px: 4,
                    color :'black'
                }}
                >
                    <Title
                    text={
                        'Learn Your Way'
                        
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    Flexibility redefined! ROUTE TRACER empowers <br/>
                    you to learn on your terms, offering choices <br/>
                    like reading, watching videos, quizzes, and more.<br/>
                     Your journey, your rules.

                    </CustomTypography>
                </Box>
            </CustomGridItem>
        </Grid>
    )
}

export default SecondSection;