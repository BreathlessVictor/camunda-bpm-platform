/* Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.camunda.spin.plugin.variable.value.impl;

import org.camunda.bpm.engine.impl.core.variable.value.AbstractTypedValue;
import org.camunda.bpm.engine.variable.type.ValueType;
import org.camunda.spin.DataFormats;
import org.camunda.spin.Spin;
import org.camunda.spin.plugin.variable.type.SpinValueType;
import org.camunda.spin.plugin.variable.value.SpinValue;
import org.camunda.spin.spi.DataFormat;

/**
 * @author Roman Smirnov
 *
 */
public abstract class SpinValueImpl extends AbstractTypedValue<Spin<?>> implements SpinValue {

  private static final long serialVersionUID = 1L;
  protected String serializedValue;
  protected DataFormat<? extends Spin<?>> dataFormat;
  protected boolean isDeserialized;
  protected String dataFormatName;

  public SpinValueImpl(
      Spin<?> value,
      String serializedValue,
      String dataFormatName,
      boolean isDeserialized,
      ValueType type) {

    super(value, type);

    this.serializedValue = serializedValue;
    this.dataFormatName = dataFormatName;
    this.isDeserialized = isDeserialized;
  }

  public Spin<?> getValue() {
    if(isDeserialized) {
      return super.getValue();
    }
    else {
      throw new IllegalStateException("Spin value is not deserialized.");
    }
  }

  public SpinValueType getType() {
    return (SpinValueType) super.getType();
  }

  public boolean isDeserialized() {
    return isDeserialized;
  }

  public String getValueSerialized() {
    return serializedValue;
  }

  public void setValueSerialized(String serializedValue) {
    this.serializedValue = serializedValue;
  }

  public String getSerializationDataFormat() {
    return dataFormatName;
  }

  public void setSerializationDataFormat(String serializationDataFormat) {
    this.dataFormatName = serializationDataFormat;
  }

  public DataFormat<? extends Spin<?>> getDataFormat() {
    if(isDeserialized) {
      return DataFormats.getDataFormat(dataFormatName);
    }
    else {
      throw new IllegalStateException("Spin value is not deserialized.");
    }
  }

}
