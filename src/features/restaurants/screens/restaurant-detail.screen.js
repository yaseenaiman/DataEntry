import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { List } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="الافطار"
          titleStyle={styles.TitleItem}
          right={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item titleStyle={styles.ChildrenItem} title="- باقلاء" />
          <List.Item titleStyle={styles.ChildrenItem} title="-  افطار كلاسك" />
        </List.Accordion>
        <List.Accordion
          title="الغداء"
          titleStyle={styles.TitleItem}
          right={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item
            titleStyle={styles.ChildrenItem}
            title="-  برغر مع الفرايز"
          />
          <List.Item titleStyle={styles.ChildrenItem} title="-  ساندوج ستيك" />
          <List.Item titleStyle={styles.ChildrenItem} title="-  شوربة فطر" />
        </List.Accordion>

        <List.Accordion
          title="العشاء"
          titleStyle={styles.TitleItem}
          right={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item titleStyle={styles.ChildrenItem} title="-  سلطة السيزر" />
          <List.Item titleStyle={styles.ChildrenItem} title="-  كوردن بلو" />
          <List.Item titleStyle={styles.ChildrenItem} title="-  بيتزا" />
        </List.Accordion>

        <List.Accordion
          title="المشروبات"
          titleStyle={styles.TitleItem}
          right={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item
            titleStyle={styles.ChildrenItem}
            title="-  مشروبات ساخنة"
          />
          <List.Item
            titleStyle={styles.ChildrenItem}
            title="-  مشروبات باردة"
          />
          <List.Item
            titleStyle={styles.ChildrenItem}
            title="-  مشروبات روحانية"
          />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  TitleItem: {
    fontFamily: "Changa_500Medium",
    fontSize: "16",
    textAlign: "right",
  },
  ChildrenItem: {
    paddingRight: 25,
    fontFamily: "Changa_500Medium",
    fontSize: "14",
    textAlign: "right",
  },
});
