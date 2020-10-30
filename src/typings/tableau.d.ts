/**
 * Type definitions for Tableau Javascript libraries
 * 
 * Included Definitions:
 * - Tableau JS API v2.6.0
 * John Hegele (https://github.com/jhegele)
 */

declare module JsApi {

  /**
   * Type definitions for Tableau's Javascript API
   * 
   * Definitions are namespaced by API version using a naming structure where v is followed by the
   * semantic version number with periods removed (JS API Version 2.6.0 is namespaced as v260, e.g.)
   * 
   * Within each version, the ordering of definitions will, broadly, attempt to mimic the ordering
   * in Tableau's JS API documentation. The one exception is that any enum is pulled into a
   * dedicated Enums section.
   * 
   * Supported versions:
   * - v2.6.0
   */

  module v260 {
    // helper type containing all JS primitive types that can be passed
    // to Tableau as values
    type _ValidTableauValue = string | number | boolean | Date;

    // START : Enums
    enum ErrorCode {
      BROWSER_NOT_CAPABLE = 'browserNotCapable',
      DOWNLOAD_WORKBOOK_NOT_ALLOWED = 'downloadWorkbookNotAllowed',
      FILTER_CANNOT_BE_PERFORMED = 'filterCannotBePerformed',
      INDEX_OUT_OF_RANGE = 'indexOutOfRange',
      INTERNAL_ERROR = 'internalError',
      INVALID_AGGREGATION_FIELD_NAME = 'invalidAggregationFieldName',
      INVALID_CUSTOM_VIEW_NAME = 'invalidCustomViewName',
      INVALID_DATE_PARAMETER = 'invalidDateParameter',
      INVALID_FILTER_FIELDNAME = 'invalidFilterFieldName',
      INVALID_FILTER_FIELDNAME_OR_VALUE = 'invalidFilterFieldNameOrValue',
      INVALID_FILTER_FIELDVALUE = 'invalidFilterFieldValue',
      INVALID_PARAMETER = 'invalidParameter',
      INVALID_SELECTION_DATE = 'invalidSelectionDate',
      INVALID_SELECTION_FIELDNAME = 'invalidSelectionFieldname',
      INVALID_SELECTION_VALUE = 'invalidSelectionValue',
      INVALID_SIZE = 'invalidSize',
      INVALID_SIZE_BEHAVIOR_ON_WORKSHEET = 'invalidSizeBehaviorOnWorksheet',
      INVALID_URL = 'invalidUrl',
      MISSING_MAX_SIZE = 'missingMaxSize',
      MISSING_MIN_SIZE = 'missingMinSize',
      MISSING_MINMAX_SIZE = 'missingMinMaxSize',
      MISSING_RANGEN_FOR_RELATIVE_DATE_FILTERS = 'missingRangeNForRelativeDateFilters',
      NO_URL_FOR_HIDDEN_WORKSHEET = 'noUrlForHiddenWorksheet',
      NO_URL_OR_PARENT_ELEMENT_NOT_FOUND = 'noUrlOrParentElementNotFound',
      NOT_ACTIVE_SHEET = 'notActiveSheet',
      NULL_OR_EMPTY_PARAMETER = 'nullOrEmptyParameter',
      SERVER_ERROR = 'serverError',
      SHEET_NOT_IN_WORKBOOK = 'sheetNotInWorkbook',
      STALE_DATA_REFERENCE = 'staleDataReference',
      UNSUPPORTED_EVENT_NAME = 'unsupportedEventName',
      VIZ_ALREADY_IN_MANAGER = 'vizAlreadyInManager'
    }

    enum ToolbarPosition {
      TOP = 'top',
      BOTTOM = 'bottom'
    }

    enum ToolbarButtonName {
      UNDO = 'undo',
      REDO = 'redo'
    }

    enum TableauEventName {
      CUSTOM_VIEW_LOAD = 'customviewload',
      CUSTOM_VIEW_REMOVE = 'customviewremove',
      CUSTOM_VIEW_SAVE = 'customviewsave',
      CUSTOM_VIEW_SET_DEFAULT = 'customviewsetdefault',
      FILTER_CHANGE = 'filterchange',
      FIRST_INTERACTIVE = 'firstinteractive',
      FIRST_VIZ_SIZE_KNOWN = 'firstvizsizeknown',
      MARKS_HIGHLIGHT = 'markshighlight',
      MARKS_SELECTION = 'marksselection',
      PARAMETER_VALUE_CHANGE = 'parametervaluechange',
      STORY_POINT_SWITCH = 'storypointswitch',
      TAB_SWITCH = 'tabswitch',
      TOOLBAR_STATE_CHANGE = 'toolbarstatechange',
      URL_ACTION = 'urlaction',
      VIZ_RESIZE = 'vizresize'
    }

    enum SelectionUpdateType {
      REPLACE = 'replace',
      ADD = 'add',
      REMOVE = 'remove'
    }

    enum SheetType {
      WORKSHEET = 'worksheet',
      DASHBOARD = 'dashboard',
      STORY = 'story'
    }

    enum SheetSizeBehavior {
      ATLEAST = 'atleast',
      ATMOST = 'atmost',
      AUTOMATIC = 'automatic',
      EXACTLY = 'exactly',
      RANGE = 'range'
    }

    enum DashboardObjectType {
      ADDIN = 'addIn',
      BLANK = 'blank',
      IMAGE = 'image',
      LEGEND = 'legend',
      PAGE_FILTER = 'pageFilter',
      PARAMETER_CONTROL = 'parameterControl',
      QUICK_FILTER = 'quickFilter',
      TEXT = 'text',
      TITLE = 'title',
      WEB_PAGE = 'webPage',
      WORKSHEET = 'worksheet'
    }

    enum NullOption {
      ALL_VALUES = 'allValues',
      NON_NULL_VALUES = 'nonNullValues',
      NULL_VALUES = 'nullValues'
    }

    enum FilterType {
      CATEGORICAL = 'categorical',
      HIERARCHICAL = 'hierarchical',
      QUANTITATIVE = 'quantitative',
      RELATIVEDATE = 'relativedate'
    }

    enum FilterUpdateType {
      ADD = 'add',
      ALL = 'all',
      REMOVE = 'remove',
      REPLACE = 'replace'
    }

    enum PeriodType {
      DAY = 'day',
      HOUR = 'hour',
      MINUTE = 'minute',
      MONTH = 'month',
      QUARTER = 'quarter',
      SECOND = 'second',
      WEEK = 'week',
      YEAR = 'year'
    }

    enum DateRangeType {
      CURR = 'curr',
      LAST = 'last',
      LASTN = 'lastn',
      NEXT = 'next',
      NEXTN = 'nextn',
      TODATE = 'todate'
    }

    enum FieldAggregationType {
      ATTR = 'ATTR',
      AVG = 'AVG',
      COLLECT = 'COLLECT',
      COUNT = 'COUNT',
      COUNTD = 'COUNTD',
      DAY = 'DAY',
      END = 'END',
      HOUR = 'HOUR',
      INOUT = 'INOUT',
      KURTOSIS = 'KURTOSIS',
      MAX = 'MAX',
      MDY = 'MDY',
      MEDIAN = 'MEDIAN',
      MIN = 'MIN',
      MINUTE = 'MINUTE',
      MONTH = 'MONTH',
      MONTHYEAR = 'MONTHYEAR',
      NONE = 'NONE',
      PERCENTILE = 'PERCENTILE',
      QTR = 'QTR',
      QUART1 = 'QUART1',
      QUART3 = 'QUART3',
      SECOND = 'SECOND',
      SKEWNESS = 'SKEWNESS',
      STDEV = 'STDEV',
      STDEVP = 'STDEVP',
      SUM = 'SUM',
      SUM_XSQR = 'SUM_XSQR',
      TRUNC_DAY = 'TRUNC_DAY',
      TRUNC_HOUR = 'TRUNC_HOUR',
      TRUNC_MINUTE = 'TRUNC_MINUTE',
      TRUNC_MONTH = 'TRUNC_MONTH',
      TRUNC_QTR = 'TRUNC_QTR',
      TRUNC_SECOND = 'TRUNC_SECOND',
      TRUNC_WEEK = 'TRUNC_WEEK',
      TRUNC_YEAR = 'TRUNC_YEAR',
      USER = 'USER',
      VAR = 'VAR',
      VARP = 'VARP',
      WEEK = 'WEEK',
      WEEKDAY = 'WEEKDAY',
      YEAR = 'YEAR'
    }

    enum FieldRoleType {
      DIMENSION = 'dimension',
      MEASURE = 'measure',
      UNKNOWN = 'unknown'
    }

    enum ParameterDataType {
      BOOLEAN = 'boolean',
      DATE = 'date',
      DATETIME = 'datetime',
      FLOAT = 'float',
      INTEGER = 'integer',
      STRING = 'string'
    }

    enum ParameterAllowableValuesType {
      ALL = 'all',
      LIST = 'list',
      RANGE = 'range'
    }
    // END : Enums

    // START : Viz Classes
    class VizManager {
      getVizs(): Viz[];
    }

    class Viz {
      constructor(parentElement: HTMLElement, url: string, options?: VizCreateOptions);
      getAreTabsHidden(): boolean;
      getIsToolbarHidden(): boolean;
      getIsHidden(): boolean;
      getParentElement(): HTMLElement;
      getUrl(): string;
      getWorkbook(): Workbook;
      getAreAutomaticUpdatesPaused(): boolean;
      addEventListener(type: TableauEventName.CUSTOM_VIEW_LOAD | TableauEventName.CUSTOM_VIEW_REMOVE | TableauEventName.CUSTOM_VIEW_SAVE | TableauEventName.CUSTOM_VIEW_SET_DEFAULT, listener: (event: CustomViewEvent) => any): void;
      addEventListener(type: TableauEventName.FILTER_CHANGE, listener: (event: FilterEvent) => any): any;
      addEventListener(type: TableauEventName.MARKS_SELECTION | TableauEventName.MARKS_HIGHLIGHT, listener: (event: MarksEvent) => any): any;
      addEventListener(type: TableauEventName.PARAMETER_VALUE_CHANGE, listener: (event: ParameterEvent) => any): any;
      addEventListener(type: TableauEventName.STORY_POINT_SWITCH, listener: (event: StoryPointSwitchEvent) => any): any;
      addEventListener(type: TableauEventName.TAB_SWITCH, listener: (event: TabSwitchEvent) => any): any;
      addEventListener(type: TableauEventName.TOOLBAR_STATE_CHANGE, listener: (event: ToolbarStateEvent) => any): any;
      addEventListener(type: TableauEventName.URL_ACTION, listener: (event: UrlActionEvent) => any): any;
      addEventListener(type: TableauEventName.VIZ_RESIZE, listener: (event: VizResizeEvent) => any): any;
      removeEventListener(type: TableauEventName.CUSTOM_VIEW_LOAD | TableauEventName.CUSTOM_VIEW_REMOVE | TableauEventName.CUSTOM_VIEW_SAVE | TableauEventName.CUSTOM_VIEW_SET_DEFAULT, listener: (event: CustomViewEvent) => any): void;
      removeEventListener(type: TableauEventName.FILTER_CHANGE, listener: (event: FilterEvent) => any): any;
      removeEventListener(type: TableauEventName.MARKS_SELECTION | TableauEventName.MARKS_HIGHLIGHT, listener: (event: MarksEvent) => any): any;
      removeEventListener(type: TableauEventName.PARAMETER_VALUE_CHANGE, listener: (event: ParameterEvent) => any): any;
      removeEventListener(type: TableauEventName.STORY_POINT_SWITCH, listener: (event: StoryPointSwitchEvent) => any): any;
      removeEventListener(type: TableauEventName.TAB_SWITCH, listener: (event: TabSwitchEvent) => any): any;
      removeEventListener(type: TableauEventName.TOOLBAR_STATE_CHANGE, listener: (event: ToolbarStateEvent) => any): any;
      removeEventListener(type: TableauEventName.URL_ACTION, listener: (event: UrlActionEvent) => any): any;
      removeEventListener(type: TableauEventName.VIZ_RESIZE, listener: (event: VizResizeEvent) => any): any;
      show(): void;
      hide(): void;
      dispose(): void;
      pauseAutomaticUpdatesAsync(): Promise<void>;
      resumeAutomaticUpdatesAsync(): Promise<void>;
      toggleAutomaticUpdatesAsync(): Promise<void>;
      revertAllAsync(): void;
      refreshDataAsync(): void;
      showDownloadWorkbookDialog(): void;
      showExportImageDialog(): void;
      showExportPDFDialog(): void;
      showExportPowerPointDialog(): void;
      showExportDataDialog(worksheetInDashboard: Sheet | SheetInfo | string): void;
      showExportCrossTabDialog(worksheetInDashboard: Sheet | SheetInfo | string): void;
      exportCrossTabToExcel(worksheetInDashboard: Sheet | SheetInfo | string): void;
      showShareDialog(): void;
      setFrameSize(width: number, height: number): void;
      getCurrentUrlAsync(): Promise<string>;
      redoAsync(): void;
      undoAsync(): void;
    }

    interface VizCreateOptions {
      disableUrlActionsPopups?: boolean;
      hideTabs?: boolean;
      hideToolbar?: boolean;
      instanceIdToClone?: boolean;
      height?: string;
      width?: string;
      device?: 'default' | 'desktop' | 'tablet' | 'phone';
      // TODO: Handle filtering
      onFirstInteractive?: (e: TableauEvent) => void;
      onFirstVizSizeKnown?: () => void;
    }

    class ToolbarState {
      getViz(): Viz;
      isButtonEnabled(toolbarButtonName: string): boolean;
    }
    // END : Viz Classes

    // START : Viz Event Classes
    class TableauEvent {
      getViz(): Viz;
      getEventName(): TableauEventName;
    }

    class CustomViewEvent extends TableauEvent {
      getCustomViewAsync(): Promise<CustomView>;
    }

    class FilterEvent extends TableauEvent {
      getWorksheet(): Worksheet;
      getFieldName(): string;
      getFilterAsync(): Promise<Filter>;
    }

    class MarksEvent extends TableauEvent {
      getWorksheet(): Worksheet;
      getMarksAsync(): Promise<Mark[]>;
    }

    class ParameterEvent extends TableauEvent {
      getViz(): Viz;
      getParameterName(): string;
      getParameterAsync(): Promise<Parameter>;
    }

    class StoryPointSwitchEvent extends TableauEvent {
      getOldStoryPointInfo(): StoryPointInfo;
      getNewStoryPoint(): StoryPoint;
    }

    class TabSwitchEvent extends TableauEvent {
      getOldSheetName(): string;
      getNewSheetName(): string;
    }

    class ToolbarStateEvent {
      getToolbarState(): ToolbarState;
    }

    class UrlActionEvent {
      getURL(): string;
      getTarget(): string;
    }

    class VizResizeEvent extends TableauEvent {
      getVizSize(): Size;
    }
    // END : Viz Event Classes

    // START : Workbook Classes
    class Workbook {
      getViz(): Viz;
      getActiveSheet(): Sheet;
      getActiveCustomView(): CustomView;
      getPublishedSheetsInfo(): SheetInfo[];
      getName(): string;
      activateSheetAsync(sheetNameOrIndex: string | number): Promise<Sheet>;
      revertAllAsync(): Promise<void>;
      getParametersAsync(): Promise<Parameter[]>;
      changeParameterValueAsync(name: string, value: _ValidTableauValue): Promise<Parameter>;
      getCustomViewsAsync(): Promise<CustomView[]>;
      showCustomViewAsync(customViewName: string): Promise<CustomView>;
      removeCustomViewAsync(customViewName: string): Promise<CustomView>;
      rememberCustomViewAsync(customViewName: string): Promise<CustomView>;
      setactiveCustomViewAsDefaultAsync(): Promise<void>;
    }

    class DataSource {
      getName(): string;
      getIsPrimary(): boolean;
      getFields(): Field[];
    }

    class Field {
      getName(): string;
      getAggregation(): FieldAggregationType;
      getDataSource(): DataSource;
      getRole(): FieldRoleType;
    }

    class CustomView {
      getName(): string;
      setName(name: string): void;
      getAdvertised(): boolean;
      setAdvertised(advertised: boolean): void;
      getDefault(): boolean;
      getOwnerName(): string;
      getUrl(): string;
      getWorkbook(): Workbook;
      saveAsync(): Promise<CustomView>;
    }
    // END : Workbook Classes

    // START : Sheet Classes
    class SheetInfo {
      getName(): string;
      getIndex(): number;
      getIsActive(): boolean;
      getIsHidden(): boolean;
      getSheetType(): SheetType;
      getSize(): any; // TODO: Need to determine the shape of SheetSize as it's not in the docs
      getUrl(): string;
      getWorkbook(): Workbook;
    }

    class Sheet extends SheetInfo {
      changeSizeAsync(options?: SheetSizeOptions): Promise<any>; // TODO: Should be SheetSize instead of any
    }

    type SheetSizeOptions = {
      behavior: 'automatic' | 'atleast';
    } | {
      behavior: 'exactly' | 'range' | 'atmost';
      maxSize: any; // TODO: Should be SheetSize
      minSize: any; // TODO: Should be SheetSize
    }

    class DataTable {
      getName(): string;
      getData(): any[][];
      getColumns(): Column[];
      getTotalRowCount(): number;
      getIsSummaryData(): boolean;
    }

    class LogicalTable {
      getTableId(): string;
      getCaption(): string;
    }

    class Column {
      getFieldName(): string;
      getDataType(): string;
      getIsReferenced(): boolean;
      getIndex(): number;
    }

    class Worksheet extends Sheet {
      getParentDashboard(): Dashboard;
      getParentStoryPoint(): StoryPoint;
      getDataSourcesAsync(): Promise<DataSource[]>;
      getSummaryDataAsync(options?: GetSummaryDataOptions): Promise<DataTable>;
      getUnderlyingDataAsync(options?: GetUnderlyingDataOptions): Promise<DataTable>;
      getUnderlyingTablesAsync(): Promise<LogicalTable[]>;
      getUnderlyingTableDataAsync(tableId: string, options?: GetUnderlyingDataOptions): Promise<DataTable>;
      // Filtering
      getFiltersAsync(): Promise<Filter[]>;
      applyFilterAsync(fieldName: string, values: _ValidTableauValue | _ValidTableauValue[], updateType: FilterUpdateType, options?: FilterOptions): Promise<string>;
      applyRangeFilterAsync(fieldName: string, range: RangeFilterOptions): Promise<string>;
      applyRelativeDateFilterAsync(fieldName: string, options?: RelativeDateFilterOptions): Promise<string>;
      applyHierarchicalFilterAsync(fieldName: string, values: string | { [filterName: string]: any[] }, updateType: FilterUpdateType): Promise<string>;
      clearFilterAsync(fieldName: string): Promise<string>;
      // Marks selection
      clearSelectedMarksAsync(): void;
      getSelectedMarksAsync(): Promise<Mark[]>;
      selectMarksAsync(fieldName: string, value: object | object[], updateType: SelectionUpdateType): void;
      selectMarksAsync(fieldValuesMap: {[filterName: string]: any}, updateType: SelectionUpdateType): void;
      selectMarksAsync(marks: Mark[], updateType: SelectionUpdateType): void;
    }

    interface GetSummaryDataOptions {
      ignoreAliases?: boolean;
      ignoreSelection?: boolean;
      maxRows?: number;
    }

    interface GetUnderlyingDataOptions extends GetSummaryDataOptions {
      includeAllColumns?: boolean;
    }

    class Dashboard extends Sheet {
      getObjects(): DashboardObject[];
      getWorksheets(): Worksheet[];
      getParentStoryPoint(): StoryPoint | null;
    }

    class DashboardObject {
      getObjectType(): DashboardObjectType;
      getDashboard(): Dashboard;
      getWorksheet(): Worksheet;
      getPosition(): Point;
      getSize(): Size;
    }

    class Story extends Sheet {
      getStoryPointsInfo(): StoryPointInfo[];
      getActiveStoryPoint(): StoryPoint;
      activateStoryPointAsync(index: number): Promise<StoryPoint>;
      activateNextStoryPointAsync(): Promise<StoryPoint>;
      activatePreviousStoryPointAsync(): Promise<StoryPoint>;
      revertStoryPointAsync(index: number): Promise<StoryPoint>;
    }

    class StoryPointInfo {
      getIndex(): number;
      getCaption(): string;
      getIsActive(): boolean;
      getIsUpdated(): boolean;
      getParentStory(): boolean;
    }

    class StoryPoint {
      getIndex(): number;
      getCaption(): string;
      getIsActive(): boolean;
      getIsUpdated(): boolean;
      getContainedSheet(): Sheet;
      getParentStory(): Story;
    }
    // END : Sheet Classes

    // START : Parameter Classes
    class Parameter {
      getName(): string;
      getCurrentValue(): DataValue;
      getDataType(): ParameterDataType;
      getAllowableValuesType(): ParameterAllowableValuesType;
      getAllowableValues(): DataValue[];
      getMinValue(): DataValue | null;
      getMaxValue(): DataValue | null;
      getStepSize(): number | null;
      getDateStepPeriod(): PeriodType | null;
    }
    // END : Parameter Classes

    // START : Filtering
    //* Filtering-related properties and methods on the Worksheet class can be found in the Sheet Classes section
    interface FilterOptions {
      isExcludeMode: boolean;
    }

    type RangeFilterOptions = {
      min?: number;
      max?: number;
      nullOption: NullOption;
    } | {
      min?: Date;
      max?: Date;
      nullOption: NullOption;
    }

    interface RelativeDateFilterOptions {
      anchorDate: Date;
      periodType: PeriodType;
      rangeType: DateRangeType;
      rangeN: number;
    }

    class Filter {
      getWorksheet(): Worksheet;
      getFilterType(): FilterType;
      getFieldName(): string;
      getFieldAsync(): Promise<Field>;
    }

    class CategoricalFilter {
      getIsExcludeMode(): boolean;
      getAppliedValues(): DataValue[];
      getIsAllSelected(): boolean;
    }

    class QuantitativeFilter {
      getDomainMin(): DataValue;
      getDomainMax(): DataValue;
      getMin(): DataValue;
      getMax(): DataValue;
      getIncludeNullValues(): boolean;
    }

    class RelativeDateFilter {
      getPeriod(): PeriodType;
      getRange(): DateRangeType;
      getRangeN(): number;
    }

    interface DataValue {
      value: _ValidTableauValue
      formattedValue: string;
    }
    // END : Filtering

    // START : Marks Selection
    class Mark {
      constructor(pairs: Pair[]);
      getPairs(): Pair[];
    }

    class Pair {
      constructor(fieldName: string, value: string | number | boolean | Date);
      fieldName: string;
      value: _ValidTableauValue
      formattedValue: string;
    }
    // END : Marks Selection

    // START : Other Classes
    interface Size {
      width: number;
      height: number;
    }

    interface Point {
      x: number;
      y: number;
    }
    // END : Other Classes
  }

}