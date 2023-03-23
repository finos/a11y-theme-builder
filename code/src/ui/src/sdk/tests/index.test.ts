import { ThemeBuilder } from "..";

test('basics', async () => {
    console.log("HERE1");
    const tb = await ThemeBuilder.create();
    expect(tb).toBeDefined();
    console.log("HERE2");
    const ds = tb.addDesignSystem("ds1");
    expect(ds).toBeDefined();
    console.log("HERE3");
});