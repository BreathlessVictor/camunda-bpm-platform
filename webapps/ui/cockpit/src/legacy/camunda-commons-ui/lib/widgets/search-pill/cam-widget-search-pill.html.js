/*
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership. Camunda licenses this file to you under the Apache License,
 * Version 2.0; you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = `<!-- CE # camunda-commons-ui/lib/widgets/search-pill/search-pill.html -->
<span class="search-label"
      ng-class="{'invalid': !valid}">
  <a href
     ng-click="onDelete()"
     tooltip-placement="top"
     uib-tooltip="{{ deleteText | translate }}"
     class="remove-search glyphicon glyphicon-remove">
  </a>

  <span cam-widget-inline-field
        class="set-value type-field"
        tabindex="0"
        ng-keydown="onKeydown($event, 'type')"
        type="option"
        options="type.values"
        change="changeSearch('type', varValue, $event)"
        on-start-editing="clearEditTrigger('type')"
        value="type.value">
    <span ng-if="type.tooltip"
          tooltip-placement="top"
          uib-tooltip="{{ type.tooltip | translate }}">
      {{ type.value.value | camQueryComponent }}
    </span>
    <span ng-if="!type.tooltip">
      {{ type.value.value | camQueryComponent }}
    </span>
  </span>

  <span ng-if="extended">:</span>

  <span ng-if="extended && potentialNames.length <= 0 && !!name.value.value"
        cam-widget-inline-field
        class="set-value name-field"
        type="text"
        tabindex="0"
        ng-keydown="onKeydown($event,'name')"
        change="changeSearch('name', varValue, $event)"
        on-start-editing="clearEditTrigger('name')"
        value="name.value.value">
    <span ng-if="name.tooltip"
          tooltip-placement="top"
          uib-tooltip="{{name.tooltip | translate }}">
        {{ name.value.value | camQueryComponent }}
    </span>
    <span ng-if="!name.tooltip">
        {{ name.value.value | camQueryComponent }}
    </span>
  </span>

  <span ng-if="extended && potentialNames.length <= 0 && !name.value.value"
        cam-widget-inline-field
        class="set-value name-field"
        tabindex="0"
        ng-keydown="onKeydown($event, 'name')"
        type="text"
        change="changeSearch('name', varValue, $event)"
        on-start-editing="clearEditTrigger('name')"
        value="name.value">
    <span ng-if="name.tooltip"
          tooltip-placement="top"
          uib-tooltip="{{name.tooltip | translate }}">
        {{ name.value | camQueryComponent }}
    </span>
    <span ng-if="!name.tooltip">
        {{ name.value | camQueryComponent }}
    </span>
  </span>

  <span ng-if="extended && potentialNames.length > 0"
        cam-widget-inline-field
        class="set-value name-field"
        tabindex="0"
        ng-keydown="onKeydown($event, 'name')"
        type="option"
        options="potentialNames"
        allow-non-options="true"
        disable-autoselect="disableTypeaheadAutoselect"
        change="changeSearch('name', varValue, $event)"
        on-start-editing="clearEditTrigger('name')"
        value="name.value">
    <span ng-if="extended && name.tooltip && name.value.key">
      {{ name.value.value | camQueryComponent }}
    </span>
    <span ng-if="extended && name.tooltip && !name.value.key">
      {{ name.value | camQueryComponent }}
    </span>
    <span ng-if="extended && !name.tooltip && name.value.key">
      {{ name.value.value | camQueryComponent }}
    </span>
    <span ng-if="extended && !name.tooltip && !name.value.key">
      {{ name.value | camQueryComponent }}
    </span>
  </span>

  <span ng-if="!basic && operator.values.length > 1"
        cam-widget-inline-field
        class="set-value operator-field"
        tabindex="0"
        ng-keydown="onKeydown($event, 'operator')"
        type="option"
        options="operator.values"
        change="changeSearch('operator', varValue, $event)"
        on-start-editing="clearEditTrigger('operator')"
        value="operator.value">
    <span ng-if="operator.tooltip"
          tooltip-placement="top"
          uib-tooltip="{{operator.tooltip | translate }}">
      {{ operator.value.value | camQueryComponent }}
    </span>
    <span ng-if="!operator.tooltip">
      {{ operator.value.value | camQueryComponent }}
    </span>
  </span>

  <span ng-if="operator.values.length < 2 && operator.tooltip"
        tooltip-placement="top"
        uib-tooltip="{{operator.tooltip | translate }}"
        class="operator-field">
    {{ operator.value.value | camQueryComponent }}
  </span>
  <span ng-if="operator.values.length < 2 && !operator.tooltip"
        class="operator-field">
    {{ operator.value.value | camQueryComponent }}
  </span>

  <span cam-widget-inline-field
        class="set-value value-field"
        tabindex="0"
        ng-keydown="onKeydown($event, 'value')"
        type="{{ valueType }}"
        change="changeSearch('value', varValue, $event)"
        on-start-editing="clearEditTrigger('value')"
        ng-if="!basic"
        options="options"
        allow-non-options="allowNonOptions"
        value="value.value"
        flexible="{{ allowDates }}">
    <span class="visible-whitespace"
          ng-if="value.tooltip"
          tooltip-placement="top"
          uib-tooltip="{{value.tooltip | translate }}">{{ value.value | camQueryComponent }}</span>
    <span class="visible-whitespace"
          ng-if="!value.tooltip">{{ value.value | camQueryComponent }}</span>
  </span>
</span>
<!-- CE / camunda-commons-ui/lib/widgets/search-pill/search-pill.html -->
`;
