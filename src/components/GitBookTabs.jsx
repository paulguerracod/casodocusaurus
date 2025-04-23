import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export default function GitBookTabs({ items }) {
  return (
    <Tabs
      className="gitbook-tabs"
      defaultValue={items[0].value}
      values={items}>
      {items.map((item, idx) => (
        <TabItem key={idx} value={item.value}>
          {item.content}
        </TabItem>
      ))}
    </Tabs>
  );
}