import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-section',
  templateUrl: './dynamic-section.html',
  styleUrl: './dynamic-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicSection {
  protected sections = [
    {
      items: [{ value: 0 }],
    },
  ];

  protected addSection(): void {
    this.sections.push({
      items: [{ value: 0 }],
    });
  }

  protected add(sectionIndex: number): void {
    this.sections[sectionIndex].items.push({ value: 0 });
  }

  protected remove(sectionIndex: number, itemIndex: number): void {
    this.sections[sectionIndex].items.splice(itemIndex, 1);
  }

  protected removeSection(sectionIndex: number): void {
    if (this.sections.length > 1) {
      this.sections.splice(sectionIndex, 1);
    }
  }

  protected onChange(sectionIndex: number, itemIndex: number, value: number): void {
    this.sections[sectionIndex].items[itemIndex].value = value;
  }

  protected getResult(sectionIndex: number): string {
    return this.sections[sectionIndex].items
      .map((item) => item.value)
      .reduce((sum, v) => sum + v, 0)
      .toLocaleString();
  }
}
