import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const SectionListBasics = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {title: 'A', data: ['Alan', 'Alessandro', 'Amandinha']},
          {
            title: 'B',
            data: [
              'Banco do Brasil',
              'Bianca',
              'Bibia',
              'Biel',
              'Bruna',
            ],
          },
          {
            title: 'C',
            data: [
              'Caixa',
              'Carol',
              'Creuza',
            ],
          },
          {
            title: 'D',
            data: [
              'Danilo',
              'Daya',
              'Dênis',
              'Dubay Açaí',
            ],
          },
          {
            title: 'F',
            data: [
              'Farmacia',
              'Fernando',
              'Fer',
              'Fred',
            ],
          },
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={item => `basicListEntry-${item}`}
      />
    </View>
  );
};

export default SectionListBasics;