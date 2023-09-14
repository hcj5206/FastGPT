import { Box, Image, Flex, Grid, useTheme } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'next-i18next';
import MyTooltip from '@/components/MyTooltip';
import { feConfigs } from '@/store/static';

const Choice = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const list = [
<<<<<<< HEAD
    ...(feConfigs?.show_git
      ? [
          {
            icon: '/imgs/home/icon_1.svg',
            title: t('home.Choice Open'),
            desc: t('home.Choice Open Desc', { title: feConfigs?.systemTitle }),
            tooltip: '前往 GitHub',
            onClick: () => window.open('https://github.com/labring/FastGPT', '_blank')
          }
        ]
      : [
          {
            icon: '/imgs/home/icon_0.svg',
            title: t('home.Choice Fast'),
            desc: t('home.Choice Fast Desc', { title: feConfigs?.systemTitle })
          }
        ]),
    {
      icon: '/imgs/home/icon_2.svg',
      title: t('home.Choice QA'),
      desc: t('home.Choice QA Desc')
=======
    {
      icon: '/imgs/home/icon_1.svg',
      title: t('home.Choice Open'),
      desc: t('home.Choice Open Desc'),
      tooltip: '前往 GitHub',
      onClick: () => { }
    },
    {
      icon: '/imgs/home/icon_2.svg',
      title: t('home.Choice QA'),
      desc: t('home.Choice QA Desc'),
      onClick: () => { }
>>>>>>> 3f3e07c7a508955bb6f87be7a2e0e7ec00bcc487
    },
    {
      icon: '/imgs/home/icon_3.svg',
      title: t('home.Choice Visual'),
<<<<<<< HEAD
      desc: t('home.Choice Visual Desc')
=======
      desc: t('home.Choice Visual Desc'),
      onClick: () => { }
>>>>>>> 3f3e07c7a508955bb6f87be7a2e0e7ec00bcc487
    },
    {
      icon: '/imgs/home/icon_4.svg',
      title: t('home.Choice Extension'),
<<<<<<< HEAD
      desc: t('home.Choice Extension Desc')
=======
      desc: t('home.Choice Extension Desc'),
      onClick: () => { }
>>>>>>> 3f3e07c7a508955bb6f87be7a2e0e7ec00bcc487
    },
    {
      icon: '/imgs/home/icon_5.svg',
      title: t('home.Choice Debug'),
<<<<<<< HEAD
      desc: t('home.Choice Debug Desc')
=======
      desc: t('home.Choice Debug Desc'),
      onClick: () => { }
>>>>>>> 3f3e07c7a508955bb6f87be7a2e0e7ec00bcc487
    },
    {
      icon: '/imgs/home/icon_6.svg',
      title: t('home.Choice Models'),
<<<<<<< HEAD
      desc: t('home.Choice Models Desc')
=======
      desc: t('home.Choice Models Desc'),
      onClick: () => { }
>>>>>>> 3f3e07c7a508955bb6f87be7a2e0e7ec00bcc487
    }
  ];

  return (
    <Box>
      <Box
        className="textlg"
        py={['30px', '60px']}
        textAlign={'center'}
        fontSize={['22px', '30px']}
        fontWeight={'bold'}
      >
<<<<<<< HEAD
        {t('home.Why FastGPT', { title: feConfigs?.systemTitle })}
=======
        {/* {t('home.Why XiaoHu')} */}
>>>>>>> 3f3e07c7a508955bb6f87be7a2e0e7ec00bcc487
      </Box>
      <Grid px={[5, 0]} gridTemplateColumns={['1fr', `1fr 1fr`, 'repeat(3,1fr)']} gridGap={6}>
        {list.map((item) => (
          <MyTooltip key={item.title} label={item.tooltip}>
            <Flex
              alignItems={'flex-start'}
              border={theme.borders.md}
              borderRadius={'lg'}
              p={'40px'}
              transition={'0.1s'}
              cursor={'default'}
              _hover={{
                bg: 'rgba(255,255,255,0.8)'
              }}
              onClick={() => item.onClick?.()}
            >
              <Flex
                flex={'0 0 48px'}
                h={'48px'}
                alignItems={'center'}
                justifyContent={'center'}
                boxShadow={theme.shadows.base}
                borderRadius={'14px'}
              >
                <Image src={item.icon} w={'28px'} alt={''} />
              </Flex>
              <Box ml={5}>
                <Box fontSize={['lg', '2xl']} fontWeight={'bold'} color={'myGray.900'}>
                  {item.title}
                </Box>
                <Box mt={1} fontSize={['md', 'lg']}>
                  {item.desc}
                </Box>
              </Box>
            </Flex>
          </MyTooltip>
        ))}
      </Grid>
    </Box>
  );
};

export default Choice;
