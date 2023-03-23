import { Node } from "../common/node";
import { Avatars } from "./avatars";
import { StandardButtons } from "./standardButtons";
import { SmallButtons } from "./smallButtons";
import { Cards } from "./cards";
import { ChartDonut } from "./chartDonut";
import { ChartPie } from "./chartPie";
import { ChartBar } from "./chartBar";
import { ChartLine } from "./chartLine";
import { ChartProgress } from "./chartProgress";
import { Chips } from "./chips";
import { Spacing } from "./spacing";
import { Dropdowns } from "./dropdowns";
import { Images } from "./images";
import { Modal } from "./modal";
import { Popovers } from "./popovers";
import { Sliders } from "./sliders";
import { Toasts } from "./toasts";
import { IDesignSystem, IMolecules } from "../interfaces";

/**
 * The molecules class.
 * @category Molecules
 */
export class Molecules extends Node implements IMolecules {

    public readonly designSystem: IDesignSystem;
    /** The avatars molecule */
    public readonly avatars: Avatars;
    /** The standard buttons molecule */
    public readonly standardButtons: StandardButtons;
    /** The small buttons molecule */
    public readonly smallButtons: SmallButtons;
    /** The standard cards molecule */
    public readonly standardCards: Cards;
    /** The chart donut molecule */
    public readonly chartDonut: ChartDonut;
    /** The chart pie molecule */
    public readonly chartPie: ChartPie;
    /** The chart bar molecule */
    public readonly chartBar: ChartBar;
    /** The chart line molecule */
    public readonly chartLine: ChartLine;
    /** The chart progress molecule */
    public readonly chartProgress: ChartProgress;
    /** The chips molecule */
    public readonly chips: Chips;
    /** The spacing molecule */
    public readonly spacing: Spacing;
    /** The dropdowns molecule */
    public readonly dropdowns: Dropdowns;
    /** The images molecule */
    public readonly images: Images;
    /** The modal molecule */
    public readonly modal: Modal;
    /** The popovers molecule */
    public readonly popovers: Popovers;
    /** The sliders molecule */
    public readonly sliders: Sliders;
    /** The toasts molecule */
    public readonly toasts: Toasts;

    constructor(parent: Node) {
        super("molecules", parent);
        this.designSystem = parent.getDesignSystem();
        this.addDependency(this.designSystem.atoms);
        this.avatars = new Avatars(this);
        this.standardButtons = new StandardButtons(this);
        this.smallButtons = new SmallButtons(this);
        this.standardCards = new Cards(this);
        this.chartDonut = new ChartDonut(this);
        this.chartPie = new ChartPie(this);
        this.chartBar = new ChartBar(this);
        this.chartLine = new ChartLine(this);
        this.chartProgress = new ChartProgress(this);
        this.chips = new Chips(this);
        this.spacing = new Spacing(this);
        this.dropdowns = new Dropdowns(this);
        this.images = new Images(this);
        this.modal = new Modal(this);
        this.popovers = new Popovers(this);
        this.sliders = new Sliders(this);
        this.toasts = new Toasts(this);
    }

    public deserialize(obj: any) {
        if (!obj) return;
        super.deserialize(obj);
        this.avatars.deserialize(obj.avatars);
        this.standardButtons.deserialize(obj.standardButtons);
        this.chartDonut.deserialize(obj.chartDonut);
        this.chartPie.deserialize(obj.chartPie);
        this.chartLine.deserialize(obj.chartLine);
        this.chartProgress.deserialize(obj.chartProgress);
        this.chips.deserialize(obj.chips);
        this.spacing.deserialize(obj.spacing);
        this.dropdowns.deserialize(obj.dropdowns);
        this.images.deserialize(obj.images);
        this.modal.deserialize(obj.modal);
        this.popovers.deserialize(obj.popovers);
        this.sliders.deserialize(obj.sliders);
        this.toasts.deserialize(obj.toasts);
    }

    public serialize(): any {
        const obj: any = {};
        obj.avatars = this.avatars.serialize();
        obj.standardButtons = this.standardButtons.serialize();
        obj.chartDonut = this.chartDonut.serialize();
        obj.chartPie = this.chartPie.serialize();
        obj.chartLine = this.chartLine.serialize();
        obj.chartProgress = this.chartProgress.serialize();
        obj.chips = this.chips.serialize();
        obj.spacing = this.spacing.serialize();
        obj.dropdowns = this.dropdowns.serialize();
        obj.images = this.images.serialize();
        obj.modal = this.modal.serialize();
        obj.popovers = this.popovers.serialize();
        obj.sliders = this.sliders.serialize();
        obj.toasts = this.toasts.serialize();
        return obj;
    }
}